export class ApiResponse<T> {
  success: boolean;
  message: string | null;
  data: T | T[] | null;
}
