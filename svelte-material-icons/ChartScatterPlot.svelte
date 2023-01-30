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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2,2H4V20H22V22H2V2M9,10A3,3 0 0,1 12,13A3,3 0 0,1 9,16A3,3 0 0,1 6,13A3,3 0 0,1 9,10M13,2A3,3 0 0,1 16,5A3,3 0 0,1 13,8A3,3 0 0,1 10,5A3,3 0 0,1 13,2M18,12A3,3 0 0,1 21,15A3,3 0 0,1 18,18A3,3 0 0,1 15,15A3,3 0 0,1 18,12Z" fill="{color}"/></svg>