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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2,5.27L3.28,4L20,20.72L18.73,22L17,20.25C16.86,21.24 16,22 15,22H9A2,2 0 0,1 7,20V10.27L2,5.27M9,2H11V4H13V2H15A2,2 0 0,1 17,4V15.18L13,11.18V10H15V8H13V6H11V8H9.82L7,5.18V4A2,2 0 0,1 9,2M9,20H11V18H9V20M13,20H15V18.27L14.73,18H13V20M9,14V16H11V14.27L10.73,14H9Z" fill="{color}"/></svg>