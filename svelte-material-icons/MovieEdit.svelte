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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21.04 11.13C20.9 11.13 20.76 11.19 20.65 11.3L19.65 12.3L21.7 14.35L22.7 13.35C22.92 13.14 22.92 12.79 22.7 12.58L21.42 11.3C21.31 11.19 21.18 11.13 21.04 11.13M19.07 12.88L13 18.94V21H15.06L21.12 14.93L19.07 12.88M11 20H3C1.9 20 1 19.11 1 18V6C1 4.89 1.9 4 3 4H4L6 8H9L7 4H9L11 8H14L12 4H14L16 8H19L17 4H21V8.12L11 18.11V20Z" fill="{color}"/></svg>