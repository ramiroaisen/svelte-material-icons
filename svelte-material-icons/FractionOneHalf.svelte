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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5.79 21.61L4.21 20.39L18.21 2.39L19.79 3.61L5.79 21.61M4 2V4H6V12H8V2H4M15 12V14H19V16H17C15.9 16 15 16.9 15 18V22H21V20H17V18H19C20.11 18 21 17.11 21 16V14C21 12.9 20.11 12 19 12H15Z" fill="{color}"/></svg>