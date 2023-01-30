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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22,14.22C22,14.22 17.61,17.35 14.72,17.39C11.84,17.44 12.13,15.56 12.13,15.56C12.13,15.56 22.71,11.94 19.83,4.79C18.53,2.95 17,2.37 14.89,2.42C12.76,2.46 10.17,3.76 8.46,7.6C7.64,9.44 7.41,11.18 7.24,12.5V12.5C7.24,12.5 5.32,12.88 4.32,12.04C3.32,11.2 2.77,12.04 2.77,12.04C2.77,12.04 1.03,14.2 2.75,14.87C4.46,15.54 7.12,15.82 7.12,15.82V15.82C7.36,17 8.08,19 10.17,20.6C13.3,23 19.32,20.4 19.32,20.4M11.63,12.33C11.76,7.36 15,5.18 16.15,6.27C17.27,7.36 16.86,9.7 14.72,11.16C12.59,12.63 11.63,12.33 11.63,12.33Z" fill="{color}"/></svg>