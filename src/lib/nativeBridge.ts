export class NativeBridge {
  private _window: any = window;
  private _bridge: any = this._window?.flutter_inappwebview;

  private static instance: NativeBridge;

  public static getInstance(): NativeBridge {
    console.log("getInstance");
    if (!NativeBridge.instance) {
      NativeBridge.instance = new NativeBridge();
    }
    return NativeBridge.instance;
  }

  public isNative(): boolean {
    console.log("isNative 1");
    console.log(this._window?.flutter_inappwebview);
    return this._window?.flutter_inappwebview != undefined;
  }

  public getDevicePlatform(): String {
    console.log("getDevicePlatform");
    console.log(this._window);
    console.log(this._window?.device?.platform);
    return this._window?.device?.platform?.toLowerCase();
  }

  public routeToLogin(): Promise<String | null> {
    if (this._bridge) return this._bridge?.callHandler("NativeRoute", "/login");
    throw new Error("routeToLogin is not set native bridge");
  }
}
