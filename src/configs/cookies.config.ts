/** Cookie httpOnly berisi JWT mentah dari backend (POST /api/auth/login). */
export const ACCESS_TOKEN_COOKIE_KEY = 'access_token';

/** Backend menandatangani token dengan expiresIn 1d. */
export const ACCESS_TOKEN_MAX_AGE = 24 * 60 * 60;
