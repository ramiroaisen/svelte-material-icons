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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15 7.8C14.6 4.5 11.8 2 8.5 2C6.8 2 5.1 2.7 3.9 3.9S2 6.8 2 8.5V22H15V9.8L18 11.6V22H20V12.8L22 14V12L15 7.8M11 20H6V18H11V20M11 16H6V14H11V16M11 12H6V10H11V12M4.3 7C4.9 5.2 6.6 4 8.5 4S12.1 5.2 12.7 7H4.3Z" fill="{color}"/></svg>