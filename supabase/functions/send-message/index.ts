import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface MessageRequest {
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);
    const { subject, message }: MessageRequest = await req.json();

    // Validate required fields
    if (!subject || !message) {
      throw new Error("Missing required fields: subject and message");
    }

    // Validate lengths
    if (subject.length > 100) {
      throw new Error("Subject must be less than 100 characters");
    }
    if (message.length > 1000) {
      throw new Error("Message must be less than 1000 characters");
    }

    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ayongwasirri@gmail.com"],
      subject: `Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Message from Portfolio
          </h1>
          <div style="margin: 20px 0;">
            <p style="color: #666; font-size: 14px; margin-bottom: 5px;">Subject:</p>
            <p style="color: #333; font-size: 16px; font-weight: 600; margin: 0;">${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <p style="color: #666; font-size: 14px; margin-bottom: 5px;">Message:</p>
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #999; font-size: 12px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    });

    console.log("Message sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-message function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
