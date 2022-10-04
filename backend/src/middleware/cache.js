import ExpressExpeditious from 'express-expeditious'; 

/* const defaultOptions = {
    namespace:'expresscache',
    defaultTtl:'1 minute',
    statusCodeExpires:{
        404:'5 minutes',
        500:'0'
    }
} */
export const cache = ExpressExpeditious({
    // Namespace used to prevent cache conflicts, must be alphanumeric
    namespace: 'expresscache',
  
    // Store cache entries for 1 minute (can also pass milliseconds e.g 60000)
    defaultTtl: '15 minute',
    statusCodeExpires:{
        404:'5 minutes',
        500:'0'
    }
  });