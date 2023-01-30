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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21 11C21 6.03 16.97 2 12 2S3 6.03 3 11C3 14.92 5.5 18.24 9 19.5V22H11V19.94C11.33 20 11.66 20 12 20S12.67 20 13 19.94V22H15V19.5C18.5 18.24 21 14.92 21 11M12 18C8.14 18 5 14.86 5 11S8.14 4 12 4 19 7.14 19 11 15.86 18 12 18M8 7H16V9H8V7M12.75 10L9.75 13L11 14.25L9.75 15.5L11.25 17L14.25 14L13 12.75L14.25 11.5L12.75 10Z" fill="{color}"/></svg>