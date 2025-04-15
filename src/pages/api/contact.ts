import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // Validate the data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: 'Missing required fields',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Here you would typically:
    // 1. Send an email
    // 2. Store in a database
    // 3. Forward to a CRM
    // For now, we'll just log it
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
    });

    // Return success response
    return new Response(
      JSON.stringify({
        message: 'Message sent successfully!',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        message: 'Error processing your request',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
