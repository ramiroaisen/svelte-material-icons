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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21.5,6L20,7.5L21.5,9L20,10.5L21.5,12L20,13.5L21.5,15H12.5A3,3 0 0,1 9.5,18A3,3 0 0,1 6.5,15H2.5V8C2.5,6.89 3.39,6 4.5,6H21.5M18.5,7.5H15V10H18.5V7.5M13.5,7.5H9.5V10H13.5V7.5M8,7.5H4V10H8V7.5M9.5,13.5A1.5,1.5 0 0,0 8,15A1.5,1.5 0 0,0 9.5,16.5A1.5,1.5 0 0,0 11,15A1.5,1.5 0 0,0 9.5,13.5Z" fill="{color}"/></svg>