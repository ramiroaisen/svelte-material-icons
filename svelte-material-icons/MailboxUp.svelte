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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5,9H9V11H5V9M22,9V18A2,2 0 0,1 20,20H2V9A5,5 0 0,1 7,4H17A5,5 0 0,1 22,9M10,9A3,3 0 0,0 7,6A3,3 0 0,0 4,9V18H10V9M16,7H12V13H14V9H16V7Z" fill="{color}"/></svg>