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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 18.88A1 1 0 0 1 11.71 19.71A1 1 0 0 1 10.3 19.71L6.3 15.71A1 1 0 0 1 6 14.87V9.75L1.21 3.62A1 1 0 0 1 1.38 2.22A1 1 0 0 1 2 2H16A1 1 0 0 1 16.62 2.22A1 1 0 0 1 16.79 3.62L12 9.75V18.88M4 4L8 9.06V14.58L10 16.58V9.05L14 4M13 16L18 21L23 16Z" fill="{color}"/></svg>