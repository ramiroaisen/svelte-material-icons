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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8.5 4A2 2 0 0 1 6.5 6A2 2 0 0 1 4.5 4A2 2 0 0 1 6.5 2A2 2 0 0 1 8.5 4M5 7C3.89 7 3 7.89 3 9V15H5V22H8.61A7 7 0 0 1 6.5 17A7 7 0 0 1 10 10.95V9C10 7.89 9.11 7 8 7M13 8V16H18.5L21.2 19.6L22.8 18.4L19.5 14H15V8M12 12.23A5 5 0 0 0 8.5 17A5 5 0 0 0 13.5 22A5 5 0 0 0 18.5 17H16.5A3 3 0 0 1 13.5 20A3 3 0 0 1 10.5 17A3 3 0 0 1 12 14.41Z" fill="{color}"/></svg>