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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19,10H17.3C17.3,13 14.76,15.1 12,15.1C9.24,15.1 6.7,13 6.7,10H5C5,13.41 7.72,16.23 11,16.72V20H13V16.72C16.28,16.23 19,13.41 19,10M15,24H17V22H15M11,24H13V22H11M12,13A3,3 0 0,0 15,10V4A3,3 0 0,0 12,1A3,3 0 0,0 9,4V10A3,3 0 0,0 12,13M7,24H9V22H7V24Z" fill="{color}"/></svg>