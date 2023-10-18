/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import {
    Button,
    ToolbarItem, Tooltip
} from '@patternfly/react-core';
import PlusIcon from "@patternfly/react-icons/dist/esm/icons/plus-icon";

interface Props {
    onClickCreateButton: () => void
}

export function TopologyToolbar (props: Props) {

    return (
        <ToolbarItem align={{default: "alignRight"}}>
            <Tooltip content={"Add new integration"}>
                <Button size="sm"
                        variant={"primary"}
                        icon={<PlusIcon/>}
                        onClick={e => props.onClickCreateButton()}
                >
                    Create
                </Button>
            </Tooltip>
        </ToolbarItem>
    )
}