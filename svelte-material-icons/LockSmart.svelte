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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,2A6,6 0 0,0 6,8V16A6,6 0 0,0 12,22A6,6 0 0,0 18,16V8A6,6 0 0,0 12,2M8,6H10V8H8V6M11,6H13V8H11V6M14,6H16V8H14V6M8,9H10V11H8V9M11,9H13V11H11V9M14,9H16V11H14V9M8,12H10V14H8V12M11,12H13V14H11V12M14,12H16V14H14V12M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16Z" fill="{color}"/></svg>