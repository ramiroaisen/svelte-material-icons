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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22,11H21L20,9H13.75L16,12.5H14L10.75,9H4C3.45,9 2,8.55 2,8C2,7.45 3.5,5.5 5.5,5.5C7.5,5.5 7.67,6.5 9,7H21A1,1 0 0,1 22,8V9L22,11M10.75,6.5L14,3H16L13.75,6.5H10.75M18,11V9.5H19.75L19,11H18M3,19A1,1 0 0,1 2,18A1,1 0 0,1 3,17A4,4 0 0,1 7,21A1,1 0 0,1 6,22A1,1 0 0,1 5,21A2,2 0 0,0 3,19M11,21A1,1 0 0,1 10,22A1,1 0 0,1 9,21A6,6 0 0,0 3,15A1,1 0 0,1 2,14A1,1 0 0,1 3,13A8,8 0 0,1 11,21Z" fill="{color}"/></svg>