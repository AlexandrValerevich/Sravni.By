class LoadingHolder {
  private static $loadingHolder = <HTMLDivElement>(
    document.querySelector('.load')
  );

  public static show() {
		this.$loadingHolder.style.display = 'block';
		setTimeout(() => LoadingHolder.hide(), 20000);
  }

  public static hide() {
		this.$loadingHolder.style.display = 'none';
  }
}

export { LoadingHolder };
