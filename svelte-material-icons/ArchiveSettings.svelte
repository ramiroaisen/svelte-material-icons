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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21 2V6H3V2H21M4 7H20V20H4V7M9 12H15V10.5C15 10.22 14.78 10 14.5 10H9.5C9.22 10 9 10.22 9 10.5V12M7 24H9V22H7V24M11 24H13V22H11V24M15 24H17V22H15V24Z" fill="{color}"/></svg>