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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13,16.18C13.5,16.35 13.9,16.63 14.23,17H15V21H14.21C13.89,21.35 13.5,21.63 13,21.8C11.85,22.22 10.58,21.87 9.78,21H9V17H9.77C10.1,16.63 10.5,16.35 11,16.18V12H13V16.18M12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20M17,4H15V5H17V11H7V5H9V4H7V2H17V4M12,9A1,1 0 0,0 13,8A1,1 0 0,0 12,7A1,1 0 0,0 11,8A1,1 0 0,0 12,9Z" fill="{color}"/></svg>