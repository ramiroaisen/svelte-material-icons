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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9.61 16.11C9.61 14.03 10.59 12.19 12.1 11H5L6.5 6.5H17.5L18.72 10.16C19.56 10.53 20.3 11.07 20.91 11.74L18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H10.29C9.86 18.13 9.61 17.15 9.61 16.11M6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16M20.71 20.7L20.7 20.71L20.71 20.7M16.11 11.61C18.61 11.61 20.61 13.61 20.61 16.11C20.61 17 20.36 17.82 19.92 18.5L23 21.61L21.61 23L18.5 19.93C17.8 20.36 17 20.61 16.11 20.61C13.61 20.61 11.61 18.61 11.61 16.11S13.61 11.61 16.11 11.61M16.11 13.61C14.73 13.61 13.61 14.73 13.61 16.11S14.73 18.61 16.11 18.61 18.61 17.5 18.61 16.11 17.5 13.61 16.11 13.61" fill="{color}"/></svg>