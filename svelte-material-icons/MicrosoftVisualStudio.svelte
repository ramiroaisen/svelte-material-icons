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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17,8.5L12.25,12.32L17,16V8.5M4.7,18.4L2,16.7V7.7L5,6.7L9.3,10.03L18,2L22,4.5V20L17,22L9.34,14.66L4.7,18.4M5,14L6.86,12.28L5,10.5V14Z" fill="{color}"/></svg>