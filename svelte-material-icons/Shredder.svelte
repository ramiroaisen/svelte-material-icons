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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6,3V7H8V5H16V7H18V3H6M5,8A3,3 0 0,0 2,11V17H5V14H19V17H22V11A3,3 0 0,0 19,8H5M18,10A1,1 0 0,1 19,11A1,1 0 0,1 18,12A1,1 0 0,1 17,11A1,1 0 0,1 18,10M7,16V21H9V16H7M11,16V20H13V16H11M15,16V21H17V16H15Z" fill="{color}"/></svg>