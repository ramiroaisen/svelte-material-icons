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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22,15V17H10A3,3 0 0,1 7,20A3,3 0 0,1 4,17H2V6A2,2 0 0,1 4,4H17A2,2 0 0,1 19,6V15H22M7,16A1,1 0 0,0 6,17A1,1 0 0,0 7,18A1,1 0 0,0 8,17A1,1 0 0,0 7,16Z" fill="{color}"/></svg>