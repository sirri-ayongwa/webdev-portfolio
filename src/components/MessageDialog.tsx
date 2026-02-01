import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface MessageDialogProps {
  trigger?: React.ReactNode;
}

const MessageDialog = ({ trigger }: MessageDialogProps) => {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subject.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-message", {
        body: { subject: subject.trim(), message: message.trim() },
      });

      if (error) throw error;

      toast.success("Message sent successfully! I'll get back to you soon.");
      setSubject("");
      setMessage("");
      setOpen(false);
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 text-foreground group px-8 py-6 text-lg"
          >
            <Mail className="mr-2 w-5 h-5" />
            Message Me
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-md border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Send a Message</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-background/50 border-white/10 focus:border-primary"
              maxLength={100}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me more..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-background/50 border-white/10 focus:border-primary min-h-[120px]"
              maxLength={1000}
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MessageDialog;
