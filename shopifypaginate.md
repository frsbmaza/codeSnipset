{%- assign limit = 8 -%}
  {% paginate collection.products by limit %}
{%- if paginate.pages > 1 -%}
      {% include 'pagination', paginate: paginate %}
    {%- endif -%}
    </div>
  {% endpaginate %}
