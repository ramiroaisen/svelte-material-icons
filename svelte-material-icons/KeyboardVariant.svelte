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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6,16H18V18H6V16M6,13V15H2V13H6M7,15V13H10V15H7M11,15V13H13V15H11M14,15V13H17V15H14M18,15V13H22V15H18M2,10H5V12H2V10M19,12V10H22V12H19M18,12H16V10H18V12M8,12H6V10H8V12M12,12H9V10H12V12M15,12H13V10H15V12M2,9V7H4V9H2M5,9V7H7V9H5M8,9V7H10V9H8M11,9V7H13V9H11M14,9V7H16V9H14M17,9V7H22V9H17Z" fill="{color}"/></svg>