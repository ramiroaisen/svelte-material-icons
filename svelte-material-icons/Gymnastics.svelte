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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4 6C4 4.9 4.9 4 6 4S8 4.9 8 6 7.1 8 6 8 4 7.1 4 6M1 9H7L14 4L15.31 5.5L11.14 8.5H14L21.8 4L23 5.4L14.5 12L14 22H12L11.5 12L8 11H1V9Z" fill="{color}"/></svg>