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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10.5 7.3L9 5.8C9.9 5.3 10.9 5 12 5C15.3 5 18 7.7 18 11V14.8L16 12.8V11C16 8.8 14.2 7 12 7C11.5 7 11 7.1 10.5 7.3M20.1 4.8L18.7 3.4L16.6 5.5L18 6.9L20.1 4.8M19.5 10.5V12.5H22.5V10.5H19.5M4.5 10.5H1.5V12.5H4.5V10.5M2.4 1.7L22.1 21.4L20.8 22.7L20.1 22H4C4 20.9 4.9 20 6 20H18.1L17.1 19H6V11C6 10.1 6.2 9.2 6.6 8.5L1.1 3L2.4 1.7M8 17H15.1L8.1 10C8.1 10.3 8 10.7 8 11V17M13 1H11V4H13V1Z" fill="{color}"/></svg>