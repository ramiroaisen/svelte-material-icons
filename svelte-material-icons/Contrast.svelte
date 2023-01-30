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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4.38,20.9C3.78,20.71 3.3,20.23 3.1,19.63L19.63,3.1C20.23,3.3 20.71,3.78 20.9,4.38L4.38,20.9M20,16V18H13V16H20M3,6H6V3H8V6H11V8H8V11H6V8H3V6Z" fill="{color}"/></svg>