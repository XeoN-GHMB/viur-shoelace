# Bone

[component-header:sl-bone]

Bone Elements


## Bone
(with boneStructure / renderType='view')
```html preview
<sl-bone id="testbone"></sl-bone>
<script>
    const bone = document.querySelector("#testbone") 
    bone.boneStructure={
    "visible":true, 
    "type":"raw",
    "multiple":false, 
    "readonly":false,
    "descr":"TestBonename", 
    "languages":null,
    "emptyValue":null
    }
    bone.boneValue="Test"
</script>
```


(with boneStructure / renderType='edit')
```html preview
<sl-bone id="testbone-edit" renderType='edit' ></sl-bone>

<sl-bone id="testbone-edit-label" renderType='edit' renderLabel></sl-bone>

<sl-bone id="testbone-edit-save" renderType='edit' rendersaveButton></sl-bone>


<script>
    const bone = document.querySelector("#testbone-edit");
    const bone_label = document.querySelector("#testbone-edit-label");
    const bone_save = document.querySelector("#testbone-edit-save");
    
    const structure = {
    "visible":true, 
    "type":"raw",
    "multiple":false, 
    "readonly":false,
    "descr":"TestBonename", 
    "languages":null,
    "emptyValue":null}
    
    bone.boneStructure=structure
    bone_label.boneStructure=structure
    bone_save.boneStructure=structure
    
    bone.boneValue="Test"
    bone_label.boneValue="Test"
    bone_save.boneValue="Test"
</script>
```
(without boneStructure / renderType='view')
```html preview

 <sl-bone renderType="view" type="raw" name="testme" renderLabel boneValue="TestValue"></sl-bone>

```
[component-metadata:sl-bone]