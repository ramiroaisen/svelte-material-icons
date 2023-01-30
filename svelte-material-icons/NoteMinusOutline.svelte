<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M23 18V20H15V18H23M13 19C13 19.7 13.13 20.37 13.35 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H15L21 9V13.35C20.37 13.13 19.7 13 19 13V12H12V5H5V19H13M14 10H19.5L14 4.5V10Z" fill="{color}"/></svg>