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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 9H7V4H17V9M19 13C15.69 13 13 15.69 13 19H4V12C4 10.9 4.89 10 6 10H18C19.11 10 20 10.9 20 12V13.09C19.67 13.04 19.34 13 19 13M10 12H6V14H10V12M23 17.89L20.11 17.64L19 15L17.87 17.64L15 17.89L17.18 19.77L16.5 22.58L19 21.09L21.45 22.58L20.8 19.77L23 17.89Z" fill="{color}"/></svg>