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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10,3L8,16H16L14,3H10M11.5,5.75A0.75,0.75 0 0,1 12.25,6.5A0.75,0.75 0 0,1 11.5,7.25A0.75,0.75 0 0,1 10.75,6.5A0.75,0.75 0 0,1 11.5,5.75M12.5,8.5A1,1 0 0,1 13.5,9.5A1,1 0 0,1 12.5,10.5A1,1 0 0,1 11.5,9.5A1,1 0 0,1 12.5,8.5M11.5,12A1.5,1.5 0 0,1 13,13.5A1.5,1.5 0 0,1 11.5,15A1.5,1.5 0 0,1 10,13.5A1.5,1.5 0 0,1 11.5,12M8,17L10,19L8,21H16L14,19L16,17H8Z" fill="{color}"/></svg>