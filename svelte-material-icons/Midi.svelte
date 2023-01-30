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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.15 8.26H22V15.74H20.15M13 8.26H18.43C19 8.26 19.3 8.74 19.3 9.3V14.81C19.3 15.5 19 15.74 18.38 15.74H13V11H14.87V13.91H17.5V9.95H13M10.32 8.26H12.14V15.74H10.32M2 8.26H8.55C9.1 8.26 9.41 8.74 9.41 9.3V15.74H7.59V10.15H6.5V15.74H4.87V10.15H3.83V15.74H2Z" fill="{color}"/></svg>