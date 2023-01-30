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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,3A4,4 0 0,0 8,7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7A4,4 0 0,0 12,3M12,5A2,2 0 0,1 14,7V12H10V7A2,2 0 0,1 12,5Z" fill="{color}"/></svg>