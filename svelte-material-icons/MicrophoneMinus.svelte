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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9,2A3,3 0 0,1 12,5V11A3,3 0 0,1 9,14A3,3 0 0,1 6,11V5A3,3 0 0,1 9,2M16,11C16,14.5 13.44,17.43 10,17.93V21H8V17.93C4.56,17.43 2,14.5 2,11H4A5,5 0 0,0 9,16A5,5 0 0,0 14,11H16M15,5H23V7H15V5Z" fill="{color}"/></svg>