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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 3C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H12.81C12.45 20.38 12.2 19.7 12.08 19H5V5H16.17L19 7.83V12.08C19.7 12.2 20.38 12.45 21 12.81V7L17 3H5M6 6V10H15V6H6M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18C12 16.11 12.89 14.34 14.39 13.21C13.85 12.5 13 12 12 12M14 17V19H22V17H14Z" fill="{color}"/></svg>