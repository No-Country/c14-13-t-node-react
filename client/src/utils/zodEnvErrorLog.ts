import type { z } from 'zod';
export const zodEnvErrorLogger = <T>(
  envParseResult: z.SafeParseReturnType<T, T>,
  envType: 'server' | 'client',
) => {
  if (!envParseResult.success && 'error' in envParseResult) {
    const { fieldErrors } = envParseResult?.error.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) =>
        errors ? `${field}: ${(errors as string[]).join(', ')}` : field,
      )
      .join('\n  ');
    console.error(envParseResult.error.issues);
    throw new Error(
      `There is an error with the ${envType} environment variables\n Missing environment variables:\n  ${errorMessage}`,
    );
  } else {
    return envParseResult.data;
  }
};
