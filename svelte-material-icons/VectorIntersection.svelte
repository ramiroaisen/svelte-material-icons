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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3.14,1A2.14,2.14 0 0,0 1,3.14V5H3V3H5V1H3.14M7,1V3H10V1H7M12,1V3H14V5H16V3.14C16,1.96 15.04,1 13.86,1H12M1,7V10H3V7H1M9,7C7.89,7 7,7.89 7,9C7,11.33 7,16 7,16C7,16 11.57,16 13.86,16A2.14,2.14 0 0,0 16,13.86C16,11.57 16,7 16,7C16,7 11.33,7 9,7M18,7V9H20V11H22V9C22,7.89 21.11,7 20,7H18M9,9H14V14H9V9M1,12V13.86C1,15.04 1.96,16 3.14,16H5V14H3V12H1M20,13V16H22V13H20M7,18V20C7,21.11 7.89,22 9,22H11V20H9V18H7M20,18V20H18V22H20C21.11,22 22,21.11 22,20V18H20M13,20V22H16V20H13Z" fill="{color}"/></svg>