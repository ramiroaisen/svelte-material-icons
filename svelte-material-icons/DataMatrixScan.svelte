<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2 2H6V0H2C.9 0 0 .9 0 2V6H2V2M22 0H18V2H22V6H24V2C24 .9 23.1 0 22 0M2 18H0V22C0 23.1 .9 24 2 24H6V22H2V18M22 22H18V24H22C23.1 24 24 23.1 24 22V18H22V22M8 6V4H10V6H8M10 14V12H12V14H10M16 4H18V6H16V4M18 6H20V8H18V6M18 14H20V16H18V14M20 12H16V18H20V20H4V4H6V6H8V10H6V12H8V14H10V16H12V18H14V16H12V14H14V10H10V6H12V4H14V8H16V10H20V12M8 18V16H6V18H8Z" fill="{color}"/></svg>