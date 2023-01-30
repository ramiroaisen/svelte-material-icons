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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9 5A3 3 0 0 0 6 8V11A3 3 0 0 0 12 11V8A3 3 0 0 0 9 5M10 11A1 1 0 0 1 8 11V8A1 1 0 0 1 10 8M16 14A3 3 0 0 0 19 11V8A3 3 0 0 0 13 8V11A3 3 0 0 0 16 14M15 8A1 1 0 0 1 17 8V11A1 1 0 0 1 15 11M19 20V18H13V16H19V14L22 17M5 13V16H4L3 13A1 1 0 0 1 5 13Z" fill="{color}"/></svg>