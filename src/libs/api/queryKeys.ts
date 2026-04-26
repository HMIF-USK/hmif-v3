/**
 * Query Keys for TanStack Query - Art Therapy Application
 *
 * Best practices:
 * - Gunakan struktur hierarki untuk query keys
 * - Specific keys di akhir (detail ID, filters)
 * - Consistent naming convention
 *
 * Contoh penggunaan:
 * ```ts
 * const { data } = useApiQuery(
 *   queryKeys.children.detail(childId),
 *   `/child/${childId}`
 * );
 * ```
 */

export const queryKeys = {
//  init
} as const;
