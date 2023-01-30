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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20,5H15A2,2 0 0,0 13,7V12A2,2 0 0,0 15,14H20A2,2 0 0,0 22,12V7A2,2 0 0,0 20,5M17.5,12.5A3,3 0 0,1 14.5,9.5A3,3 0 0,1 17.5,6.5A3,3 0 0,1 20.5,9.5A3,3 0 0,1 17.5,12.5M17.5,11A1.5,1.5 0 0,1 16,9.5A1.5,1.5 0 0,1 17.5,8A1.5,1.5 0 0,1 19,9.5A1.5,1.5 0 0,1 17.5,11M12,15V5H4A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V15H12M10,12H4V7H10V12Z" fill="{color}"/></svg>