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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4,6V4A12,12 0 0,1 16,16H14A10,10 0 0,0 4,6M4,10V8A8,8 0 0,1 12,16H10A6,6 0 0,0 4,10M4,12A4,4 0 0,1 8,16H4V12M3,18H19V16L22,19L19,22V20H3V18Z" fill="{color}"/></svg>