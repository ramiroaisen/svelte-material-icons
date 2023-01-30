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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9,7H11V11H13V7H15V17H13V13H11V17H9V7M17,7H20A3,3 0 0,1 23,10V14A3,3 0 0,1 20,17H17V7M20,15A1,1 0 0,0 21,14V10A1,1 0 0,0 20,9H19V15H20M7,14A3,3 0 0,1 4,17A3,3 0 0,1 1,14V7H3V14A1,1 0 0,0 4,15A1,1 0 0,0 5,14V7H7V14Z" fill="{color}"/></svg>