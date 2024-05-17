export class PATHS {
  public static baseUrl() {
    return '';
  }

  public static feed() {
    const base = this.baseUrl();
    return `${base}/feed`;
  }

  public static chart() {
    const base = this.baseUrl();
    return `${base}/chart`;
  }
}