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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13.09 20H5V6H3V20C3 21.11 3.9 22 5 22H13.81C13.44 21.39 13.2 20.71 13.09 20M19 2H9C7.9 2 7 2.9 7 4V16C7 17.11 7.9 18 9 18H13.09C13.2 17.29 13.44 16.61 13.81 16H9V4H11V10L13.5 7.75L16 10V4H19V13C19.68 13 20.36 13.11 21 13.34V4C21 2.9 20.11 2 19 2M23 18V20H15V18H23Z" fill="{color}"/></svg>