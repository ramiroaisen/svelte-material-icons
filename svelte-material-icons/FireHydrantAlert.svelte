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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22 7H20V13H22V7M22 15H20V17H22V15M3 15V14H2V12H3V11H5V15H3M17 12V11H15V15H17V14H18V12H17M16 6H13.86C13.5 4.6 12.4 3.5 11 3.14V2H9V3.14C7.6 3.5 6.5 4.6 6.14 6H4V8H16V6M16 22H4C4 20.9 4.89 20 6 20V9H14V20C15.11 20 16 20.9 16 22M8 13C8 14.11 8.9 15 10 15S12 14.11 12 13 11.11 11 10 11 8 11.9 8 13Z" fill="{color}"/></svg>